document.addEventListener("DOMContentLoaded", function () {
  const options = {
    strings: ["a Web Developer", "an Android Developer", "experienced in IoT Development", "a Software Engineer"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  };

  new Typed("#typed-output", options);
});


const skills = [
  { href: "https://www.javascript.com/", target: "_blank", rel: "follow noopener noreferrer", alt: "javascript", src: "./assets/img/tools/js.webp" },
  { href: "https://www.typescriptlang.org/", target: "_blank", rel: "follow noopener noreferrer", alt: "typescript", src: "./assets/img/tools/ts.webp" },
  { href: "https://nodejs.org/", target: "_blank", rel: "follow noopener noreferrer", alt: "nodejs", src: "./assets/img/tools/nodejs.webp" },
  { href: "https://expressjs.com/", target: "_blank", rel: "follow noopener noreferrer", alt: "expressjs", src: "./assets/img/tools/express.webp" },
  {  href: "https://www.electronjs.org/", target: "_blank", rel: "follow noopener noreferrer", alt: "electronjs", src: "./assets/img/tools/electron.webp" },
  { href: "https://react.dev/", target: "_blank", rel: "follow noopener noreferrer", alt: "react", src: "./assets/img/tools/react.webp" },
  { href: "https://laravel.com/", target: "_blank", rel: "follow noopener noreferrer", alt: "laravel", src: "./assets/img/tools/laravel.webp" },
  { href: "https://flutter.dev/", target: "_blank", rel: "follow noopener noreferrer", alt: "flutter", src: "./assets/img/tools/flutter.webp" },
  { href: "https://vuejs.org/", target: "_blank", rel: "follow noopener noreferrer", alt: "vuejs", src: "./assets/img/tools/vue.webp" },
  { href: "https://www.codeigniter.com/", target: "_blank", rel: "follow noopener noreferrer", alt: "codeigniter", src: "./assets/img/tools/ci.webp" },
  { href: "https://svelte.dev/", target: "_blank", rel: "follow noopener noreferrer", alt: "svelte", src: "./assets/img/tools/svelte.webp" },
  { href: "https://www.python.org/", target: "_blank", rel: "follow noopener noreferrer", alt: "py", src: "./assets/img/tools/py.webp" },
  { href: "https://wso2.com/", target: "_blank", rel: "follow noopener noreferrer", alt: "wso2", src: "./assets/img/tools/wso2.webp" },
  { href: "https://redis.io/", target: "_blank", rel: "follow noopener noreferrer",alt: "redis", src: "./assets/img/tools/redis.webp" },
  { href: "https://www.postgresql.org/", target: "_blank", rel: "follow noopener noreferrer", alt: "postgresql", src: "./assets/img/tools/pg.webp" },
  { href: "https://www.mysql.com/", target: "_blank", rel: "follow noopener noreferrer", alt: "mysql", src: "./assets/img/tools/mysql.webp" },
  { href: "https://www.microsoft.com/en-us/sql-server/", target: "_blank", rel: "follow noopener noreferrer", alt: "sql-server", src: "./assets/img/tools/sql-server.webp" },
  { href: "https://www.elastic.co/", target: "_blank", rel: "follow noopener noreferrer",alt: "elk", src: "./assets/img/tools/elk.webp" },
  { href: "https://github.com/", target: "_blank", rel: "follow noopener noreferrer", alt: "github", src: "./assets/img/tools/github.webp" },
  { href: "https://git-scm.com/", target: "_blank", rel: "follow noopener noreferrer", alt: "git", src: "./assets/img/tools/git.webp" },
  { href: "https://tailwindcss.com/", target: "_blank", rel: "follow noopener noreferrer", alt: "tailwind", src: "./assets/img/tools/tailwind.webp" },
  { href: "https://getbootstrap.com/", target: "_blank", rel: "follow noopener noreferrer", alt: "bootstrap", src: "./assets/img/tools/bootstrap.webp" }
];

const section = document.querySelector("#skills");

const skillContainer = document.createElement("div");
skillContainer.className = "flex flex-wrap justify-center";

skills.forEach(skill  => {
  if (skill .href) {
    const anchor = document.createElement("a");
    anchor.href = skill .href;
    anchor.target = skill .target;
    anchor.rel = skill .rel;

    const img = document.createElement("img");
    img.alt = skill .alt;
    img.src = skill .src;
    img.className = "m-5 h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24";

    anchor.appendChild(img);
    skillContainer.appendChild(anchor);
  } else {
    const img = document.createElement("img");
    img.alt = skill .alt;
    img.src = skill .src;
    img.className = "m-5 h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24";

    skillContainer.appendChild(img);
  }
});

section.appendChild(skillContainer);
