"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function selectQuerywithWhere(queryValues) {
    if (queryValues.selectedColumn !== null) {
        let query = "select * from " + queryValues.tableName + " where ";
        for (let index = 1; index <= queryValues.conditions.length; index++) {
            if (index === queryValues.conditions.length) {
                query += queryValues.conditions[index - 1] + "=$" + index;
            }
            else {
                query += queryValues.conditions[index - 1] + "=$" + index + " and ";
            }
        }
        return query;
    }
    else {
        let query = "select ";
        for (let index = 0; index < queryValues.selectedColumn.length; index++) {
            if (index === queryValues.selectedColumn.length - 1) {
                query += queryValues.selectedColumn[index];
            }
            else {
                query += queryValues.selectedColumn[index] + ",";
            }
        }
        query += " from " + queryValues.tableName + " ";
        for (let index = 1; index <= queryValues.selectedColumn.length; index++) {
            if (index === queryValues.selectedColumn.length) {
                query += queryValues.selectedColumn[index - 1] + "=$" + index;
            }
            else {
                query += queryValues.selectedColumn[index - 1] + "=$" + index + " and ";
            }
        }
        return query;
    }
}
exports.default = selectQuerywithWhere;
//# sourceMappingURL=selectQuery.js.map