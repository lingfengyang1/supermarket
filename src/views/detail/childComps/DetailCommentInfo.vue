<template>
    <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
        <div class="info-header">
            <div class="header-title">用户评价</div>
            <div class="header-more">更多&gt;</div>
        </div>
        <div class="info-content" v-if="comment">
            <div>
                <div class="user">
                    <span>
                        <img :src="commentInfo.user.avatar" alt="avatar">
                    </span>
                    <span class="name">{{commentInfo.user.uname}}</span>
                </div>
                <div class="comment-detail">
                    <div class="desc">{{commentInfo.content}}</div>
                    <div class="other">
                        <span class="date">{{commentInfo.created | showDate}}</span>
                        <span class="color">{{commentInfo.style}}</span>
                    </div>
                    <div class="comment-img" v-if="commentInfo.images && commentInfo.images.length">
                        <img
                        v-for="(item, index) in commentInfo.images"
                        :key="index"
                         :src="item" alt="avatar">
                    </div>
                </div>
            </div>
        </div>
        <div v-else>暂时没有评论 ≥Ö‿Ö≤ </div>
    </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
    name:'DetailCommentInfo',
    props: {
        commentInfo:{
            type: Object,
            default(){
                return {};
            }
        }
    },
    computed: {
        comment(){
            return Object.keys(this.commentInfo).length;
        }
    },
    filters:{
       showDate(value) {
         // 首先根据原生的时间戳来生成对应的Date对象
         const date = new Date(value);
         // 接着就是调用工具类中的格式化方法对我们的时间戳进行格式化 格式化输出符合指定格式的字符串
         return formatDate(date, "yyyy-MM-dd")
       }
    }
}
</script>

<style scoped>
.comment-info {
    padding: 8px 8px 20px;
    border-bottom: solid 4px rgba(100, 100, 100, .1);
}
.info-header {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid rgba(100, 100, 100, .1);
}
.info-content {
    margin-top: 8px;
}
.info-content .user img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.info-content .user .name {
    position: relative;
    top: -15px;
    left: 8px;
}
.comment-detail .desc {
    padding: 4px;
    text-indent: 2em;
    color: var(--color-text);
}
.comment-detail .other {
    color: var(--color-text);
}
.comment-detail .other span {
    padding: 4px;
}
.comment-detail .comment-img {
    display: flex;
}
.comment-img img {
    width: 25%;
    padding-right: 6px;
}
</style>
