<template>
<div class="regist">
    <Row type="flex" justify="center" align="middle" @keydown.enter.native="submitRegist" style="height:100%">
        <Col class="layout">
        <div>
            <Header />
            <Row>
                <Form ref="registForm" :model="form" :rules="rules" class="form">
                    <span class="regist-title">注册</span>
                    <FormItem prop="username">
                        <Input v-model="form.username" :maxlength="16" size="large" clearable placeholder="请输入注册登录账号" />
                    </FormItem>
                    <FormItem prop="nickname">
                        <Input v-model="form.nickname" :maxlength="20" size="large" clearable placeholder="请输入用户名（昵称）" />
                    </FormItem>
                    <FormItem prop="email">
                        <Input v-model="form.email" size="large" clearable placeholder="请输入邮箱" />
                    </FormItem>
                    <FormItem prop="password">
                        <SetPassword size="large" v-model="form.password" @on-change="changeInputPass" />
                    </FormItem>
                    <FormItem prop="mobile">
                        <Input v-model="form.mobile" size="large" clearable placeholder="请输入手机号">
                        <Select v-model="select" slot="prepend" style="width: 70px">
                            <Option value="86">+86</Option>
                        </Select>
                        </Input>
                    </FormItem>
                    <FormItem prop="code" :error="errorCode">
                        <Row type="flex" justify="space-between">
                            <Input v-model="form.code" size="large" clearable placeholder="请输入短信验证码" :maxlength="10" class="input-verify" />
                            <CountDownButton ref="countDown" @on-click="checkVaptcha" :autoCountDown="false" size="large" :loading="sending" :text="getSms" />
                        </Row>
                    </FormItem>
                </Form>
                <Row type="flex" justify="space-between">
                    <Button class="regist-btn" type="primary" size="large" :loading="loading" @click="submitRegist">
                        <span v-if="!loading">注册</span>
                        <span v-else>注册中...</span>
                    </Button>
                    <router-link to="/login">
                        <a class="to-login">使用已有账号登录</a>
                    </router-link>
                </Row>
            </Row>
        </div>
        <Footer />
        </Col>
        <LangSwitch />
    </Row>
</div>
</template>

<script>
import {
    vaptchaID,
    regist,
    sendRegistSms
} from "@/api/index";
import {
    validateUsername,
    validateMobile,
    validatePassword
} from "@/libs/validate";
import Header from "@/views/main-components/header";
import Footer from "@/views/main-components/footer";
import LangSwitch from "@/views/main-components/lang-switch";
import CountDownButton from "@/views/my-components/zwz/count-down-button";
import SetPassword from "@/views/my-components/zwz/set-password";
var vaptchaObject;
export default {
    components: {
        CountDownButton,
        LangSwitch,
        SetPassword,
        Header,
        Footer
    },
    data() {
        return {
            getSms: "获取验证码",
            error: false,
            loading: false,
            sending: false,
            select: "86",
            errorCode: "",
            form: {
                username: "",
                password: "",
                mobile: "",
                code: ""
            },
            rules: {
                username: [{
                        required: true,
                        message: "请输入注册登录账号",
                        trigger: "blur"
                    },
                    {
                        validator: validateUsername,
                        trigger: "blur"
                    }
                ],
                nickname: [{
                    required: true,
                    message: "请输入用户名（昵称）",
                    trigger: "blur"
                }],
                password: [{
                        required: true,
                        message: "请输入密码",
                        trigger: "blur"
                    },
                    {
                        validator: validatePassword,
                        trigger: "blur"
                    }
                ],
                email: [{
                        required: true,
                        message: "请输入邮箱地址"
                    },
                    {
                        type: "email",
                        message: "邮箱格式不正确"
                    }
                ],
                mobile: [{
                        required: true,
                        message: "请输入手机号",
                        trigger: "blur"
                    },
                    {
                        validator: validateMobile,
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    methods: {
        initVaptcha() {
            let that = this;
            vaptcha({
                //配置参数
                vid: vaptchaID, // 验证单元id
                type: "invisible", // 展现类型 隐藏式
                offline_server: "你的离线验证接口地址 可选但此处不能为空"
            }).then(function (vaptchaObj) {
                vaptchaObject = vaptchaObj;
                vaptchaObj.listen("pass", function () {
                    that.form.token = vaptchaObj.getToken();
                    // 验证成功 发送验证码
                    that.sendSmsCode();
                });
            });
        },
        checkVaptcha() {
            this.$refs.registForm.validate(valid => {
                if (valid) {
                    vaptchaObject.validate(); // 若没验证验证码 开始验证
                }
            });
        },
        sendSmsCode() {
            this.sending = true;
            this.getSms = "发送中";
            sendRegistSms(this.form.mobile, this.form).then(res => {
                this.getSms = "获取验证码";
                this.sending = false;
                if (res.success) {
                    this.$Message.success("发送短信验证码成功");
                    // 开始倒计时
                    this.$refs.countDown.startCountDown();
                }
            });
        },
        changeInputPass(v, grade, strength) {
            this.form.passStrength = strength;
        },
        submitRegist() {
            this.$refs.registForm.validate(valid => {
                if (valid) {
                    if (!this.form.code) {
                        this.errorCode = "验证码不能为空";
                        return;
                    } else {
                        this.errorCode = "";
                    }
                    this.loading = true;
                    regist(this.form).then(res => {
                        this.loading = false;
                        if (res.success) {
                            let query = {
                                username: this.form.username
                            };
                            this.$router.push({
                                name: "regist-result",
                                query: query
                            });
                        } else {
                            vaptchaObject.reset();
                        }
                    });
                }
            });
        }
    },
    mounted() {
        this.initVaptcha();
    }
};
</script>

<style lang="less">
@import "./regist.less";
</style>
