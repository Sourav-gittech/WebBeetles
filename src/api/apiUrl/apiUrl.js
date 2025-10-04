const baseUrl = 'http://localhost:3005/';

// auth 
const endPoint_userRegister = 'api/auth/register';
const endPoint_userLogin = 'api/auth/login';
const endPoint_userVerifyEmail = 'api/auth/verify-email';
// const endPoint_userProfile = 'api/user/auth/profile';
const endPoint_userUpdateProfile = 'api/auth/update-profile';
const endPoint_userForgotPassword = 'api/auth/forgot-password';
const endPoint_userResetPassword = 'api/auth/reset-password';

// category 
const endPoint_createCategory = 'api/categories/create-category';
const endPoint_allCategory = 'api/categories/all-categories';
const endPoint_categoryDetails = 'api/categories/details/';
const endPoint_updateCategory = 'api/categories/update-category/';
const endPoint_deleteCategory = 'api/categories/delete-category/';

// instructor 
const endPoint_requestInstructor = 'api/instructor/request';
const endPoint_allInstructor = 'api/instructor/all-instructors';
const endPoint_editInstructorProfile = 'api/instructor/edit-profile';

export default baseUrl;

export {
    endPoint_userRegister, endPoint_userLogin, endPoint_userVerifyEmail, endPoint_userUpdateProfile, endPoint_userForgotPassword, endPoint_userResetPassword,
    endPoint_createCategory, endPoint_allCategory, endPoint_categoryDetails, endPoint_updateCategory, endPoint_deleteCategory,
    endPoint_requestInstructor, endPoint_allInstructor, endPoint_editInstructorProfile
};