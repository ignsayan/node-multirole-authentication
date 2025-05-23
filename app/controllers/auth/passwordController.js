import responseHandler from '../../helpers/responseHandler.js'
import forgotPasswordAction from '../../actions/auth/forgotPasswordAction.js'
import resetPasswordAction from '../../actions/auth/resetPasswordAction.js'

export const forgotPassword = responseHandler(async (req) => {
    await forgotPasswordAction(req.body);
    return {
        message: 'Password reset email sent successfully',
        data: {}
    };
});

export const resetPassword = responseHandler(async (req) => {
    const token = await resetPasswordAction(req.body);
    return {
        message: 'Password reset successfully',
        data: { token }
    };
});