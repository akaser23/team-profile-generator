module.exports = templateData => {
    // destructure page data by section
    const { projects, about, ...header } = templateData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="./src/style.css">
    </head>
    <body class="container">
        <div class="row">
            <div class= "col-12 header">
                <p>
                    My Team 
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card manager-card">
          
                </div>
                <div class=" card employee-card">
    
                </div>
            </div>
        </div>
        <div class="employee-card">
    
        </div>
    </body>
    </html>
    `;
  };