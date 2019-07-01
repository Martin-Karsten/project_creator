<template>
    <el-main class="general-container">
        <h1>Submit bugs</h1>
        <p></p>
        <p>This site is currently in <strong>alpha</strong>. Bug reports are always appreciated. Before making a bug report please keep in mind that this site is only developed by one person,
            that's why it might take a while for the bug to get fixed.
        </p>
        <div style="margin: 4rem;"></div>
        <el-row>
            <el-col class="hidden-xs-only hidden-sm-only" :md="2" :lg="6" :xl="6">
                <div><p> </p></div>
            </el-col>
            <el-col :sm="24" :md="20" :lg="12" :xl="12">
                <el-form class="bug-report-form" ref="bugReportForm" 
                :disabled="getDisabled()" :rules="rules" label-position="top" label-width="100px" :model="form">
                <el-form-item label="Subject" prop="bug_subject">
                    <el-input v-model="form.bug_subject"
                        maxlength="100"
                        show-word-limit />
                </el-form-item>
                <el-form-item label="How did this bug occur?" prop="bug_cause">
                    <el-input v-model="form.bug_cause"
                    maxlength="300"
                    show-word-limit />
                </el-form-item>
                <el-form-item class="bug-explanation" label="Further Explanation" prop="explanation">
                    <el-input class="bug-explanation-textarea" 
                    :autosize="{ minRows: 10, maxRows: 10 }"
                    type="textarea"
                    maxlength="750"
                    show-word-limit
                    v-model="form.bug_explanation"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSubmit('bugReportForm')">Submit</el-button>
                </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
import { mapGetters } from 'vuex'
import Form from "vform"
export default {
    data(){
        var whiteSpaceValidator = (rule, value, callback) => {
            if(!value.replace(/\s/g, '').length){
                return callback(new Error('Field cannot be empty'));
            }
            else
                callback();
        };
        return{
            form: new Form({
                bug_subject: "",
                bug_cause: "",
                bug_explanation: "",
            }),
            rules: {
                bug_subject: [
                    { required: true, message: 'Subject required', trigger: 'blur' },
                    { validator: whiteSpaceValidator, trigger: 'blur'}
                ],
                bug_cause: [
                    { required: true, message: 'Please describe how this bug occured', trigger: 'blur' },
                    { validator: whiteSpaceValidator, trigger: 'blur'}
                ],
                // explanation: [
                //     { required: true, message: 'Please input Activity name', trigger: 'blur' },
                // ]
            }
        }
    },
    computed: {
        ...mapGetters({
            user: 'auth/user'
        })
    },
    methods: {
      handleSubmit(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
            this.form.post('/bug-report')
            this.$refs[formName].resetFields();
            this.form.bug_explanation = ''
            this.$message({
                message: 'Thank you for submitting a bug.',
                type: 'success'
            });
            } else {
            console.log(this.form.bug_subject)
            console.log('error submit!!');
            return false;
            }
        });
      },
      getDisabled(){
        if(this.user)
            return false
        else
            return true
      }
    }
}
</script>

<style>

.bug-report-form{
    width: 100%; height: 100%;
    display: table;
    margin: 0 auto;
}

</style>
