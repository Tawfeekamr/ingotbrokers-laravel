<template>
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="loginModalLabel">Login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">
                    <div>
                        <div class="d-block">
                            <label class="font-weight-bold">Your Email:</label>
                        </div>
                        <div class="input-group mb-2">
<!--                            <input v-on:input="onInput" type="text" class="form-control" >-->
                            <input type="text" v-on:input="onEmailInput" class="form-control">
                        </div>
                        <div class="d-block mb-3" v-if="!isValidEmail">A valid email is required</div>


                    </div>
                    <div>
                        <div class="d-block">
                            <label for="pass-input" class="font-weight-bold">Your Password:</label>
                        </div>
                        <div class="input-group mb-3">
                            <input v-on:input="onPassInput" id="pass-input" type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" name="password">

                            <div class="invalid-feedback">password is required</div>
                        </div>
                        <div class="d-block mb-3" v-if="!isValidPassword">Password is required</div>

                    </div>
                   <div class="d-flex justify-content-end">
                       <button type="submit" class="btn">Submit</button>
                   </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>

    export default {

        name: "LoginComponent",

        mounted() {
            console.log('Login component mounted.')
        },

        data: () => ({
            isValidEmail: false,
            isValidPassword: false,
            formSubmitted: false
        }),

        methods: {
            validateBeforeSubmit(e) {
              console.log(e.target.value);
            },
            submitForm(){
                this.formSubmitted = true
            },
            onPassInput(event) {
                let pass = event.target.value;
                if (pass !== "") {
                    this.isValidPassword = true
                } else {
                    this.isValidPassword = false
                }
                return pass;
            },
            onEmailInput(event) {
                console.log(event.target.value);
                let email = event.target.value;
                if (/\S+@\S+\.\S+/.test(email)) {
                    this.isValidEmail = true;
                } else {
                    this.isValidEmail = false;
                }
                return email;
            }
        },

    }
</script>

<style scoped>

</style>
