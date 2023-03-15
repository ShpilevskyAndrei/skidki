import { ToastType } from 'ngx-agroex-toast';

export const TOAST_CONFIG = {
  default: {
    success: {
      toastType: ToastType.Success,
      title: 'Успешно',
    },
    error: {
      toastType: ToastType.Error,
      title: 'Что-то пошло не так, попробуйте снова',
    },
  },

  auth: {
    signUp: {
      success: {
        toastType: ToastType.Success,
        title: 'Регистрация прошла успешно',
        message: 'Войдите в аккаунт, используя данные при регистрации',
      },
      error: {
        toastType: ToastType.Error,
        title: 'Произошла ошибка при попытке регистрации',
        message: 'Попробуйте еще раз',
      },
    },
    signIn: {
      success: {
        toastType: ToastType.Success,
        title: 'Авторизация прошла успешно',
      },
      error: {
        toastType: ToastType.Error,
        title: 'Произошла ошибка при попытке авторизации',
        message: 'Попробуйте еще раз',
      },
    },
    signOut: {
      success: {
        toastType: ToastType.Success,
        title: 'Вы успешно вышли из аккаунта',
      },
      error: {
        toastType: ToastType.Error,
        title: 'Произошла ошибка при попытке выхода из аккаунта',
        message: 'Попробуйте еще раз',
      },
    },
    isSignedIn: {
      success: {
        toastType: ToastType.Success,
        title: 'Вы авторизованный пользователь',
      },
      error: {
        toastType: ToastType.Error,
        title: 'У Вас нет доступа к данной странице',
        message: 'Выполните вход в свою учетную запись',
      },
    },
  },

  account: {
    delete: {
      success: {
        toastType: ToastType.Success,
        title: 'Вы успешно удалили ваш аккаунта',
      },
      error: {
        toastType: ToastType.Error,
        title: 'Произошла ошибка при попытке удаления аккаунта',
        message: 'Попробуйте еще раз',
      },
    },
    passwordChanged: {
      success: {
        toastType: ToastType.Success,
        title: 'Вы успешно сменили пароль',
        message: 'Зайдите в Ваш аккаунт, используя новый пароль',
      },
      error: {
        toastType: ToastType.Error,
        title: 'Произошла ошибка при попытке смены пароля',
        message: 'Попробуйте еще раз',
      },
    },
    updateUserInfo: {
      success: {
        toastType: ToastType.Success,
        title: 'Вы успешно обновили данные',
      },
      error: {
        toastType: ToastType.Error,
        title: 'Произошла ошибка при попытке обновить данные',
        message: 'Попробуйте еще раз',
      },
    },
  },
};
