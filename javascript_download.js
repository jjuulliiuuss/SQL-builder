

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("compile_file").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    var filename = "hello.txt";
     
    var values = get_schema_table_names()
    var first = values[0];
    var second = values[1];

    var text = first + second;
    
    var sql_file = GetCellValues()
    download(filename, sql_file);
}, false);