document.addEventListener("DOMContentLoaded", () => {
  const meow = document.getElementById("meow");
  meow.style.cursor = "pointer";

  meow.addEventListener("click", () => {
    const w = window.open("", "_blank", "width=800,height=800");

    w.document.write(`
      <html>
        <head>
          <title>MEOW</title>
          <style>
            html, body {
              margin: 0;
              padding: 0;
              overflow: hidden;
              background: black;
            }
            canvas {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
            iframe {
              position: relative;
              z-index: 2;
            }
            button {
              position: absolute;
              bottom: 10px;
              left: 10px;
              z-index: 5;
              padding: 10px;
            }
          </style>
        </head>

        <body>

          <iframe src="/meow" style="width:100%;height:35%;border:0;"></iframe>

          <iframe 
            width="100%" 
            height="35%" 
            src="https://www.youtube.com/embed/9FLqsywFyTU" 
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
          </iframe>

          <video controls width="390" height="220" preload="auto" style="position:relative;z-index:3;">
            <source src="/assets/cats/cocaine.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>

          <button id="ytbtn">open short</button>

          <canvas id="c"></canvas>
          <audio id="meowSound" src="/assets/meow.ogg"></audio>

          <script>
            document.getElementById("ytbtn").onclick = () => {
              window.open("https://www.youtube.com/shorts/9FLqsywFyTU", "_blank", "width=800,height=800");
            };

            const canvas = document.getElementById("c");
            const ctx = canvas.getContext("2d");
            const audio = document.getElementById("meowSound");

            function resize() {
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
            }
            resize();
            window.addEventListener("resize", resize);

            const cats = [];
            let cursorX = 0;
            let cursorY = 0;

            const catPool = [
              "/assets/cats/0XYvRd7oD.jpg",
              "/assets/cats/L6d7rFyt1.jpg",
              "/assets/cats/711.jpg",
              "/assets/cats/vk.jpg",
              "/assets/cats/e7k.png"
            ];

            const catImages = catPool.map(src => {
              const img = new Image();
              img.src = src;
              return img;
            });

            function spawnCat(x, y, vx, vy) {
              const img = catImages[(Math.random() * catImages.length) | 0];

              cats.push({
                img,
                x,
                y,
                vx,
                vy,
                scale: 1
              });

              audio.currentTime = 0;
              audio.play().catch(() => {});
            }

            function explosion(x, y) {
              for (let i = 0; i < 10; i++) {
                spawnCat(
                  x,
                  y,
                  (Math.random() - 0.5) * 10,
                  (Math.random() - 0.5) * 10
                );
              }
            }

            document.addEventListener("mousemove", e => {
              cursorX = e.clientX;
              cursorY = e.clientY;
            });

            document.addEventListener("click", e => {
              explosion(e.clientX, e.clientY);
            });

            function loop() {
              ctx.fillStyle = "rgba(0,0,0,0.3)";
              ctx.fillRect(0, 0, canvas.width, canvas.height);

              for (let c of cats) {

                const dx = cursorX - c.x;
                const dy = cursorY - c.y;

                c.vx += dx * 0.0005;
                c.vy += dy * 0.0005;

                c.vy += 0.3;

                c.x += c.vx;
                c.y += c.vy;

                if (c.y > canvas.height - 80) {
                  c.y = canvas.height - 80;
                  c.vy *= -0.4;
                }

                if (c.x < 0 || c.x > canvas.width) {
                  c.vx *= -1;
                }

                c.vx *= 0.99;

                if (c.img && c.img.naturalWidth > 0) {
                  ctx.drawImage(c.img, c.x, c.y, 80, 80);
                }
              }

              requestAnimationFrame(loop);
            }

            loop();
          <\/script>

        </body>
      </html>
    `);

    w.document.close();
  });
});