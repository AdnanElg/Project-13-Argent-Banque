// Type :
export type LoginUserType = {
  isLogin: boolean;
  token: null | string;
};

export type IsLoginType = {
  loginUser: {
    isLogin: boolean;
  };
};

export type TokenType = {
  loginUser: {
    token: null | string;
  };
};
