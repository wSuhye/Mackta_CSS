import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import { router } from "../routes/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        inputDepart: "",
        inputDest: "",
        inputDate: "",
        userInfo: null,
        allUsers: [
            { id: 1, name: "nick", email: "nick@naver.com", password: "1234" },
            {
                id: 2,
                name: "juwon",
                email: "juwon@naver.com",
                password: "12345"
            }
        ],
        isLogin: false,
        isLoginError: false
    },
    mutations: {
        SET_DEPART(state, inputDepart) {
            state.inputDepart = inputDepart;
        },
        SET_DEST(state, inputDest) {
            state.inputDest = inputDest;
        },
        SET_DATE(state, inputDate) {
            state.inputDate = inputDate;
        },
        SET_LOGIN(state, loginSet) {
            state.loginSet = loginSet;
        },
        SET_LOGIN_SUCCESS(state, payload) {
            (state.isLogin = true), (state.isLoginError = false);
            state.userInfo = payload;
        },
        SET_LOGIN_ERROR(state) {
            (state.isLogin = false), (state.isLoginError = true);
        }
        // SET_USER(state, userId, password) {
        //   state.loginSet.userId = userId;
        //   state.loginSet.password = password;
        // }
    },
    actions: {
        INPUT_DEPART({ commit }, value) {
            commit("SET_DEPART", value);
        },
        INPUT_DEST({ commit }, value) {
            commit("SET_DEST", value);
        },
        INPUT_DATE({ commit }, value) {
            commit("SET_DATE", value);
        },
        SEND_FORM() {
            axios.post("http://localhost:8080/searchresult", {
                userDepart: this.state.inputDepart,
                userDest: this.state.inputDest,
                userDate: this.state.inputDate
            });
        },
        LOGIN({ commit }, loginObj) {
            axios
                .post("https://reqres.in//api/login", loginObj)
                .then(res => {
                    let token = res.data.token;
                    let config = {
                        headers: {
                            // response schema 안에 있는 token을 접근해서 넣어줌
                            "access-token": token
                        }
                    };

                    axios
                        .get("/api/users/2", config)
                        .then(response => {
                            let userInfo = {
                                id: response.data.data.id,
                                first_name: response.data.data.first_name,
                                last_name: response.data.data.last_name,
                                avatar: response.data.data.avatar
                            };
                            commit("SET_LOGIN_SUCCESS", userInfo);
                        })
                        .catch(() => {
                            alert("이메일과 비밀번호를 확인해주세요");
                            // eslint-disable-next-line no-console
                            console.log("1");
                        });
                })
                .catch(() => {
                    alert("이메일과 비밀번호를 확인해주세요");
                    console.log("2");
                });
            // let selectedUser = null;

            // state.allUsers.forEach(user => {
            //     if (user.email === loginObj.email) {
            //         selectedUser = user;
            //     }
            // });
            // if (selectedUser === null) {
            //     // alert("입력하신 이메일이 존재하지 않습니다.");
            //     commit("SET_LOGIN_ERROR");
            // }
            // if (selectedUser != null) {
            //     if (selectedUser.password === loginObj.password) {
            //         commit("SET_LOGIN_SUCCESS", selectedUser);
            //         router.push({ name: "search" });
            //     } else {
            //         // alert("이메일과 비밀번호가 일치하지 않습니다.");
            //         commit("SET_LOGIN_ERROR");
            //     }
            // }
        }
    }
});
