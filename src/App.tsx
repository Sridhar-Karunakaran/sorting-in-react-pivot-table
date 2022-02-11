import React from 'react';
import { PivotViewComponent, Inject, FieldList } 
from '@syncfusion/ej2-react-pivotview';
import {alphaNumericdata} from './data';
import './App.css';

function App() {
 return (
    <div id="wrapper">
      <PivotViewComponent 
        showFieldList={true}
        enableValueSorting={true}
        dataSourceSettings={{
          dataSource: alphaNumericdata,
          enableSorting: false,
          rows: [ {name: 'ProductID', dataType:"number"}],
          columns: [{ name: 'Country' }],
          valueAxis: "row", // Change it to column to sort data plotted in column axis
          values: [
            { name: 'Sold', caption: 'Units Sold' }, 
            { name: 'Amount', caption: 'Sold Amount' }
          ],
          valueSortSettings: {
            headerText: "618-XW##Sold Amount",
            headerDelimiter: "##",
            sortOrder: "Descending"
          },
          sortSettings: [
            {name: "ProductID", order: "Ascending"},
            //{name: "Products", order: "Descending"}
          ]
        }}>
          <Inject services={[FieldList]}></Inject>
      </PivotViewComponent>
    </div>
  );
}

export default App;
