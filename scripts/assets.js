const fs = require("fs");
const fsTool = require("fs-extra");
const path = require("path");
const assets = require("../uploaded");
const { title } = require("process");

function readFiles(dir, processFile) {
  fs.readdir(dir, (error, fileNames) => {
    if (error) throw error;
    fileNames.forEach((filename) => {
      const name = path.parse(filename).name;
      const ext = path.parse(filename).ext;
      const filepath = path.resolve(dir, filename);
      fs.stat(filepath, function(error, stat) {
        if (error) throw error;
        const isFile = stat.isFile();
        if (isFile) {
          processFile(filepath, name, ext, stat);
        } else {
          readFiles(`${dir}/${filename}`, processFile);
        }
      });
    });
  });
}

(async () => {
  readFiles("docs", async (filepath, name, ext, stat) => {
    // 替换文件
    if (ext === ".md") {
      const file = fs.readFileSync(filepath, "utf-8");
      const lines = file.split("\r\n");
      const resultFile = await Promise.all(
        lines.map(async (o) => {
          // 获取匹配对应的
          const match = o.match(/\!\[.*\]\(.*\)/);
          if (match) {
            const before = match[0];
            // 获取需要更新的
            const target = assets.find((o) => before.includes(`/${o.title}`));
            if (!target) {
              if (before.indexOf("assets") >= 0) {
                console.log("【找不到匹配的】", before);
              }
            } else {
              await fsTool
                .move(
                  path.join(__dirname, "../assets/", target.title),
                  path.join(__dirname, "../uploaded/", target.title)
                )
                .catch((err) => {
                  // console.log("【文件已上传】");
                });
              // 匹配空字符的
              console.log(filepath, before, target);
              return o
                .split("../")
                .join("")
                .replace(`assets/${target.title}`, target.url);
            }
          }
          return o;
        })
      );
      // 文件处理完成
      await fsTool.writeFile(filepath, resultFile.join("\r\n"));
    }
  });
})();
