<template>
<div class="" >
    <div class="about_top_row" >
        <div class="top_left" >
            <div class="app_name" >
                陈湖旧事
            </div>
            <div class="app_intro" >
                做有深度的阅读、有回音的倾诉、有温度的树洞。
            </div>
        </div>
        <div class="right_img"></div>
    </div>
    <div class="sub_box" >
        <div class="sub_box_in" >
            <div class="sub_title" >
                由来
            </div>
            <div class="line"></div>
        </div> 
        <div class="sub_detail">
            我所在的城市南昌是一座名副其实的湖城，城中大大小小的湖泊数不胜数。东有南昌“马尔代夫”瑶湖、踏青胜地艾溪湖、青山湖。西有省府重地的前湖。南有抚河古道挖土烧窑挖出来的象湖，北有碟子湖、黄家湖等等。但最后我选用陈湖作为本应用的名称，实际上南昌并没有陈湖这个湖，湖沿岸的村民一般称陈家湖，但由于我不姓陈，所有在这里就称它陈湖。
        </div>  
        <div class="sub_detail">
            陈湖是鄱阳湖众多子湖中的一小湖汊，它是我出生的地方，我的祖祖辈辈们都生养于此。电影《从你的全世界路过》中提到过每个人心中都应该有自己的稻城亚丁。陈湖就是我心中住着的稻城亚丁，不同的是稻城是要带自己心爱的人去，而陈湖只适合你自己一个人去。我希望陈湖旧事小程序能成为你所向往的故乡，你可以像在故乡面前一样倾诉自己情感、分享自己的喜悦，也可以在这立下大志，畅想未来。
        </div>   
        <div  class="sub_detail">
            最后愿你在快节奏的都市生活中疲倦时能在陈湖旧事中感受到故乡般的温暖。
        </div>
    </div>
    <div class="sub_box" >
        <div class="sub_box_in" >
            <div class="sub_title" >
                起点
            </div>
            <div class="line"></div>
        </div> 
        <div class="sub_detail">
            前几年我很喜欢一个app叫犀牛故事，大致是一个撰写、分享故事的app，曾经还上过苹果应用市场的月推荐榜单，但是很不幸这个app已经运营不下去关闭了，所以也就萌生了自己开发一个类似应用的想法。说来也好笑，我一直梦想成为一名出租车司机，因为司机们每天面对的都是各式各样的人，而乘客似乎也喜欢将生活中的喜怒哀乐倾诉给出租车司机听，这也是做这个应用的另外一个原因。
        </div>     
    </div>
    <div class="sub_box" >
        <div class="sub_box_in" >
            <div class="sub_title" >
                情况描述
            </div>
            <div class="line"></div>
        </div> 
        <div class="sub_detail">
           由于白天还有的本职工作，该项目前后暂时只有自己一个人来开发，所以功能并没有做的那么完善。关于内容素材本来是准备开发给用户来自己撰写的，但是考虑到现在写内容的人不多，所以内容暂时由我和阿珂更新，大家有好的素材想分享可以发送至我的邮箱( 516994147@qq.com )。后续是否需要该功能视情况而定。
        </div>     
    </div>
    <div class="sub_box" >
        <div class="sub_box_in" >
            <div class="sub_title" >
                团队成员
            </div>
            <div class="line"></div>
        </div>    
        <div class="person_row">
            <div class="job_name">作者</div>
            <div class="user_name">渣叔</div>
        </div>
        <div class="person_row">
            <div class="job_name">编辑</div>
            <div class="user_name">渣叔、阿珂</div>
        </div>
        <div class="person_row">
            <div class="job_name">贡献人员</div>
            <div class="user_name">微信朋友圈大哥、大姐</div>
        </div>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style scoped="scoped">
.about_top_row{
    width: 100%;
    padding: 0.1rem 0.6rem 0.2rem 0.2rem;
    box-sizing: border-box;
    background: #2B4ADC;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.about_top_row>.top_left{
    display: flex;
    flex-direction: column;
}
.about_top_row>.top_left>view{
    flex-wrap: wrap;
    padding-right:0.4rem;
}
.app_name{
    font-size: 0.6rem;
    color: #FFFFFF;
    font-family: 黑体;
    font-weight: bold;
    padding: 0.2rem 0;
    
}
.app_intro{
    font-size: 0.24rem;
    color: #FFFFFF;
    
}
.about_top_row>.right_img{
    width:2rem;
    height: 1.65rem;
    background: url(../../../assets/images/about_top_bg.png) no-repeat;
    background-size: contain;
    background-position: center;
}
.sub_box{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0.4rem;
    box-sizing: border-box;
}
.sub_box_in{
    position: relative;
    padding: 0.3rem 0;
}
.sub_title{
    display: inline;
    font-size: 0.4rem;
    font-weight: bold;
    padding: 0 0.3rem;
}
.line{
    height: 0.2rem;
    width: auto;
    background: #FFC107;
    border-radius: 0.1rem;
    position: relative;
    top: -0.16rem;
    z-index: -1;
}
.sub_detail{
    font-size: 0.28rem;
    text-indent: 0.56rem;
}

.person_row{
    width: 100%;
    display: flex;
    flex-direction: row; 
    align-items: center;
    padding: 0.1rem 0.3rem;
    box-sizing: border-box;
}
.job_name{
    background:#EBF0F9;
    color: #4D73C3;
    font-size: 0.24rem;
    padding: 0.06rem 0;
    width: 1.4rem;
    text-align: center;
}
.user_name{
    font-size: 0.32rem;
    padding-left: 0.3rem;
    color: #596C8E;
}
</style>