
        function addColumn() {
            const table = document.getElementById("myTable");
            const rows = table.getElementsByTagName("tr");
            for (let i = 0; i < rows.length; i++) {
                let i=0;
                const cell = document.createElement("td");
                cell.innerHTML = '<input type="text" class="cell-input" placeholder="Enter col value">';
                rows[i].appendChild(cell);
            }

            
            const newRow = document.createElement("tr");
            const cell1 = document.createElement("td");
            cell.innerHTML = '<input type="text" class="cell-input" placeholder="Enter row value">';
            newRow.appendChild(cell1);
            table.appendChild(newRow);

          
        }

        function addRow() {
            const table = document.getElementById("myTable");
            const newRow = document.createElement("tr");
            const cells = table.rows[0].cells;
            for (let i = 0; i < cells.length; i++) {
                const cell = document.createElement("td");
                cell.innerHTML = '<input type="text" class="cell-input" placeholder="Enter row value">';
                newRow.appendChild(cell);
            }
            table.appendChild(newRow);
           
        }

        function updateList() {
            const columnValueLists = {};
            const rows = document.querySelectorAll("#myTable tr");
        
            // Initialize columnValueLists
            rows[0].querySelectorAll("td input.cell-input").forEach(function (cell, cellIndex) {
                columnValueLists[cellIndex] = [];
            });
        
            // Iterate over the rows and populate columnValueLists
            rows.forEach(function (row) {
                const cells = row.querySelectorAll("td input.cell-input");
                cells.forEach(function (cell, cellIndex) {
                    const listItem = document.createElement("li");
                    listItem.textContent = cell.value;
        
                    if (cellIndex === 0) {
                        // Column values
                        columnValueLists[cellIndex].push(listItem);
                    } else {
                        // Row values
                        columnValueLists[cellIndex].push(listItem);
                    }
                });
            });
        
            // update the lists
            const rowValueList = document.getElementById("rowValueList");
            const columnValueList = document.getElementById("columnValueList");
            rowValueList.innerHTML = "";
            columnValueList.innerHTML = "";
        
            for (const colIndex in columnValueLists) {
                const colList = columnValueLists[colIndex];
                const colListItem = document.createElement("li");
                colListItem.textContent = `------------`;
        
                columnValueList.appendChild(colListItem);
        
                colList.forEach(function (listItem) {
                    columnValueList.appendChild(listItem);
                });
            }
        }
        