$(function () {
    $('.container').fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad: function (link, index) {
            $('.section').eq(index - 1).addClass('now');
        },
        onLeave: function () {

        },
        afterRender:function () {
            // console.log(this);
            /*this没有api方法*/

            /*jquery插件初始的时候封装这个方法*/
            /*1.回想jquery插件的封装 $.fn.fullpage = function(){} */
            /*2.jquery本身没有的方法通过$.fn的方式追加方法  认为是插件方法*/
            /*3.例如：$.fn.src = function(){ return this.attr('src') } this 你选择谁this（jquery对象）执行谁 */
            /*点击更多切换下一页*/
            $('.more').on('click',function () {
                $.fn.fullpage.moveSectionDown();
            });
        }
    });

});