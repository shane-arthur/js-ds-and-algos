{
    /* <html>

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>

      <body>
        <div class="outer-div">
          <div class="inner-div">
            <button class='button'>
              Click
            </button>
          </div>
        </div>
      </body>

    </html> */
}

window.addEventListener('DOMContentLoaded', () => {

    const outerDiv = document.querySelector('.outer-div');

    outerDiv.addEventListener('click', (event) => {

        const {
            target
        } = event;

        if (target.classList.contains('outer-div')) {
            alert('outest-guy');
            return;
        }

        if (target.classList.contains('inner-div')) {
            alert('inner-guy');
            return;
        }

        if (target.classList.contains('button')) {
            alert('button-guy');
            return;
        }
    });
});