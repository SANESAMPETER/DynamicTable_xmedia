var company = "<!DOCTYPE html><html>";
company += "<head><title>Company table</title></head><body><table><thead><tr><th>Company</th><th>Contact</th><th>Country</th></tr></thead>";
company += "<tbody><tr><td>Alfreds Futterkiste</td><td>8148229038</td><td>Germany</td> </tr>";
company += "<tr><td>Centro comercial Moctezuma</td><td>8148229567</td><td>Mexico</td></tr></tbody></table></body></html>";

var temp = document.createElement('div');
temp.innerHTML = company;

var companyData = temp.querySelector('table tbody');
var companythead = temp.querySelector('table thead');
var columnNames = Array.from(companythead.rows[0].cells).map(cell => cell.textContent);
var companyList = document.getElementById('companyList');
var separator = document.createElement('li');
        separator.textContent = '-----------------------';
function CompanyDetails(){
    for (var i = 0; i < companyData.rows.length; i++) {
        var row = companyData.rows[i];
        var cells = row.cells;

        var listItem = document.createElement('li');
        for (var j = 0; j < cells.length; j++) {
            var columnName = columnNames[j];
            var cellData = cells[j].textContent;
            listItem.textContent += `${columnName}: ${cellData}, `;
        }
        
        companyList.appendChild(separator);
        listItem.textContent = listItem.textContent.slice(0, -2); 
        companyList.appendChild(listItem);
    }
}
