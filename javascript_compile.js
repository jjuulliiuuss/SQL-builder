var dict_column_types = {
    'int': 'Integer',
    'float': 'Integer',
    'str': 'String',
    'bool': 'Integer',
    'char': 'Character',
    'date': 'Date',
    'datetime': 'DateTime',
};


var col_types = {
    'Column Name': 'raw',
    'Column Type': 'dropdown',
    'Length': 'input',   
    'Description': 'raw', 
    'Empty column': 'toggle'   
}

// Get schema and table name
function get_schema_table_names()  {
    var schema_name = document.getElementById("inlineFormInputName").value
    var table_name = document.getElementById("inlineFormInputGroupUsername").value
    return [schema_name, table_name]
}

// Get table column informations

function GetCellValues() {
    var output = "";
    col_type_mapper = {}
    var table = document.getElementById('tabl');
    for (var r = 0, n = table.rows.length; r < n; r++) {
        new_row = true
        add_formatter = "\n"
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            if (r == 0){
                col_type_mapper[c] = col_types[table.rows[r].cells[c].innerHTML]
                if (col_type_mapper[c]=='raw'){
                    output +=  table.rows[r].cells[c].innerText + ", "
                }
                if (m-c==1) {
                    output += "\n"
                }
            }
            else {
                if (col_type_mapper[c] == 'raw') { 
                    if (new_row == true) {
                        output += add_formatter
                        new_row = false
                    }
                    output +=  table.rows[r].cells[c].innerText + ", "
                }
            }
        }
    }
    return 'Output: \n'+output
}




// compile SQL file


// compile header section

// compile columns section

// compile constraints section


// compile meta information section

