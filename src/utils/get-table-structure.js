export default function getTableStructure(data) {
  const headers = [...Object.keys(data[1])]
  const tableData = data.map((e) => Object.values(e))
  const tableStructure = { headers: headers, data: tableData }
  return tableStructure
}
