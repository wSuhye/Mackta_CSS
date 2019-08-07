<template>
    <v-container fill-height style="max-width: 450px">
        <v-layout row wrap align-center>
            <v-flex xs12>
                <v-alert :value="isLoginError" type="error">아이디와 비밀번호를 확인해주세요</v-alert>
                <v-alert :value="isLogin" type="success">로그인 되었습니다.</v-alert>
                <v-card>
                    <v-toolbar flat>
                        <v-toolbar-title>로그인</v-toolbar-title>
                    </v-toolbar>
                    <div class="pa-3">
                        <v-text-field v-model="email" label="이메일을 입력하세요"></v-text-field>
                        <v-text-field v-model="password" label="패스워드를 입력하세요" type="password"></v-text-field>
                        <v-btn
                            @click="LOGIN({
							email, password
						})"
                            depressed
                            block
                            large
                        >login</v-btn>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "Login",
    data: () => ({
        email: "",
        password: ""
    }),
    computed: {
        ...mapState(["isLogin", "isLoginError"])
    },
    methods: {
        ...mapActions(["LOGIN"])
    }
};
</script>

<style>
.pa-3 {
    padding: 3px;
}
</style>
