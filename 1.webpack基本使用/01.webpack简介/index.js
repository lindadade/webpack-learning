// 因为采用ES6语法 -> 需要工具来编译一遍
// 引入js资源
import $ from 'jquery';
// 引入样式资源
import './index.less';
// 引入图片、字体等其他资源

$('#title').click(() => {
  $('body').css('backgroundColor', 'deeppink');
})
