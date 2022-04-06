const url = 'https://hexschool.github.io/js-filter-data/data.json';
const table = document.querySelector('.table-content');
const filter = document.querySelector('.filter');
let data = {};
let category = '';

function renderData(_data) {
  let str = '';
  _data.forEach((i) => {
    const content = `<tr><td>${i.作物名稱}</td>
    <td>${i.市場名稱}</td><td>${i.上價}</td>
    <td>${i.中價}</td>
    <td>${i.下價}</td>
    <td>${i.平均價}</td>
    <td>${i.交易量}</td></tr>`;
    str += content;
  });
  return str;
}

this.axios.get(url)
  .then((res) => {
    data = res.data.filter((a) => a.作物名稱);
    table.innerHTML = renderData(data);
  });

function filterCategory(e) {
  if (e.target.nodeName === 'BUTTON') {
    category = e.target.dataset.category;
    const showData = data.filter((i) => i.種類代碼 === category);
    table.innerHTML = renderData(showData);
  }
}

filter.addEventListener('click', filterCategory);
