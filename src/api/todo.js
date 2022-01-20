import service from '../utils/request';
//从轻服务获取所有的todolist
export const getData = () => {
    return new Promise((resolve, reject) => {
        service.request({
            method: 'GET',
            url: '/get_db_users'
        }).then((res) => {
            resolve(res);
        }).catch(error => {
            reject(error);
        })
    })
};
export const addNewList = (data) => {
    service.request({
        method: 'POST',
        url: '/db_control',
        data
    })
};
export const delListItem = (data) => {
    service.request({
        method: 'DELETE',
        url: '/del_db_todoList',
        data
    })
};
export const modifyListItem = (data) => {
    service.request({
        method: 'POST',
        url: '/modify_db_todoList',
        data
    })
}