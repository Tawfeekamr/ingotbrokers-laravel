<template>
    <form action="" @submit.prevent="handleSubmit">
        <div class="form-master">
            <div class="form-group">
                <label for="first-name">Name</label>
                <label for="last-name" class="d-none">Last Name</label>
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <input id="first-name" type="text" class="form-control w-100" placeholder="First Name" name="first-name"  v-validate="{ required: true }">
                        <span class="from-error">{{ errors.first('first-name') }}</span>

                    </div>
                    <div class="col-12 col-sm-6">
                        <input id="last-name" type="text" class="form-control w-100"  placeholder="Last Name" name="last-name" v-validate="{ required: true }">
                        <span class="from-error">{{ errors.first('last-name') }}</span>
                    </div>
                </div>

            </div>
            <div class="form-group">
                <label for="user-email">Email address</label>
                <input type="text" class="form-control" id="user-email" placeholder="name@example.com" name="email" v-validate="{ required: true, email: true }">
                <span class="from-error">{{ errors.first('email') }}</span>

            </div>
            <div class="form-group">
                <label for="country-list">Country</label>

                <select v-model="user.selectedCountry" id="country-list" class="form-control">
                    <option disabled selected>Select your country</option>
                    <option value="+962">Jordan</option>
                    <option value="+965">KSA</option>
                    <option value="+967">UAE</option>
                </select>
            </div>
            <div class="form-group">

                <label for="phone-number">Phone</label>
                <label for="country-code" class="d-none">Country Code</label>

                <div class="row row-cols-2">
                    <div class="col-12 col-md-4">
                        <input v-model="user.selectedCountry" id="country-code" type="text" class="form-control"  placeholder="Country Code" name="country-code" v-validate.continues="{ required: true, regex: /^(\+?\d{1,3}|\d{1,4})$/, max: 5 }">
                        <span class="from-error">{{ errors.first('country-code') }}</span>

                    </div>
                    <div class="col-12 col-md-6 px-0">
                        <input id="phone-number" type="number" class="form-control"  placeholder="Phone" name="phone" v-validate.continues="{ required: true, regex: /[0-9]{0,14}$/, max: 10 }" >
                        <span class="from-error">{{ errors.first('phone') }}</span>
                    </div>
                </div>

            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" name="password" class="form-control"  placeholder="it should contain English letters and digits (8 characters minimum)" v-validate="{required: true, min: 8}">
                <span class="from-error">{{ errors.first('password') }}</span>

            </div>
            <div class="text-center mt-3 mt-xl-5">

                <button class="btn-default btn-green rounded w-250" type="submit">
                    Register</button>
            </div>
        </div>
    </form>

</template>

<script>

    const $validator = window.VeeValidate;

    export default {
        name: "RegFormComponent",

        data() {
            return {
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    selectedCountry: ''
                },
                submitted: false,

            }
            },
        methods: {
               handleSubmit(e) {
                   e.preventDefault();
                   this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.user))
                    }
                });
            }
        }
    }


</script>

<style scoped>

</style>
