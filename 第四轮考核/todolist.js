
var vm = new Vue({
    el: '#item',
    data: {
        doingNum: window.localStorage.getItem('doing_num') || 0,
        doneNum: window.localStorage.getItem('done_num') || 0,
        newItem: '',
        doingItems: JSON.parse(window.localStorage.getItem('doing_key') || '[]'),
        doneItems: JSON.parse(window.localStorage.getItem('done_key') || '[]'),
        editItem: '',
        preMessage: '',
    },

    watch: {
        // 监听待办事项的数据变化
        doingItems: {
            deep: true,
            handler(newValue, oldValue){
                window.localStorage.setItem('doing_key', JSON.stringify(newValue));
            }
        },

        // 监听已完成事项的数据变化
        doneItems: {
            deep: true,
            handler(newValue, oldValue){
                window.localStorage.setItem('done_key', JSON.stringify(newValue));
            }
        },

        // 监听代办事项数量的变化
        doingNum: {
            handler(newValue, oldValue){
                window.localStorage.setItem('doing_num', newValue);
            }
        },

        // 监听已完成事项数量的变化
        doneNum: {
            handler(newValue, oldValue){
                window.localStorage.setItem('done_num', newValue);
            }
        },
    },

    methods: {
        // 添加代办事项
        add_item(){
            if(this.newItem) {
                let id = new Date().toLocaleString();
                this.doingItems.push({
                    message: this.newItem,
                    done: false,
                    id: id,
                    isEdit: false,
                });
                this.doingNum++;
                this.newItem = '';
            }
            else {
                let text = $('#text');
                text.css("border-color", "#ff5051");
                text.focus();
                setTimeout(() => {
                    text.css("border-color", "#35495e");
                }, 3000);
            }
        },

        // 删除事项
        delete_item(state, index){
            if(!state) {
                this.doingItems.splice(index, 1);
                this.doingNum--;
            }
            else {
                this.doneItems.splice(index, 1);
                this.doneNum--;
            }
        },

        // 将事项添加到已完成
        finish_item(message, index){
            let id = new Date().toLocaleString();
            this.delete_item(false, index);
            this.doneItems.push({
                message: message,
                done: true,
                id: id,
            });
            this.doneNum++;
        },

        // 双击修改事项
        edit_item(item){
            if(item.message) {
                this.editItem = item.message;
                this.preMessage = item.message;
                item.message = '';
                item.isEdit = true;
            }
        },

        // 修改事项完成
        edit_end(item){
            if(this.editItem) {
                item.message = this.editItem;
            }
            else {
                item.message = this.preMessage;
            }
            item.isEdit = false;
        },
    },
})