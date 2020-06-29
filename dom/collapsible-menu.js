//javascript.info task

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <style>
      .menu ul {
        display: none;
        list-style: none;
        margin: 10px;
        padding-left: 20px;
      }

      .menu .title {
        font-size: 22px;
        cursor: pointer;
      }

      .menu.open ul {
        display: block;
      }

      .menu .title::before {
        content: '▶ ';
      }

      .menu.open .title::before {
        content: '▼ ';
      }

      .open {
        display: block;
      }
    </style>

    <script>
      window.addEventListener('DOMContentLoaded', () => {
        const title = document.querySelector('.title');
        const ul = document.querySelector('div');

        title.onclick = function() {
          ul.classList.toggle('open');
        };
      });
    </script>
  </head>
  <body>
    <div class="menu">
      <span class="title"> Sweeties (click me)!</span>
      <ul>
        <li>Cake</li>
        <li>Donut</li>
        <li>Honey</li>
      </ul>
    </div>
  </body>
</html>
