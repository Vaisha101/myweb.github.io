document.getElementById('downloadButton').addEventListener('click', function () {
    var pdf = new jsPDF();
    var html = document.querySelector('.container').innerHTML;
    var styles = `
        <style>
            body {
                font-family: Arial, sans-serif;
            }
            h1, h2 {
                color: #333;
            }
            ul {
                list-style-type: none;
                padding: 0;
            }
            li {
                padding: 5px 0;
            }
        </style>
    `;
    pdf.fromHTML(styles + html, 15, 15);
    pdf.save('myPortfolio.pdf');
});