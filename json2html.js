// json2html.js

export default function json2html(data) {
  return `<table data-user="manasvisahu453@gmail.com">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              ${data.map(item => {
                return `<tr>
                          <td>${item.Name || ''}</td>
                          <td>${item.Age || ''}</td>
                          <td>${item.Gender || ''}</td>
                        </tr>`;
              }).join('')}
            </tbody>
          </table>`;
}
