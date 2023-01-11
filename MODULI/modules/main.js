import{generateList,generateItem as generateListItem} from "./list.js"
import{generateTable, generateItem as generateTableItem, generateTablerow
} from "./table.js"

let ul = generateList(document.body);
generateListItem(ul,"images/1.jpg");
generateListItem(ul,"images/2.jpg");
generateListItem(ul,"images/3.jpg");


let table = generateTable(document.body);
let tr = generateTablerow(table);
generateTableItem(tr,"images/1.jpg");
generateTableItem(tr,"images/2.jpg");
generateTableItem(tr,"images/3.jpg");