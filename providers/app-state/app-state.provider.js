import * as React from "react";
import AppConstant from "../../app-constant";

const initialState = {
  sharedState: {
    userState: {},
    appState: {
      toastState: {},
    },
  },
  methods: {
    setToast: () => {},
    setUser: () => {},
  },
};

export const AppStateContext = React.createContext(initialState);

export const ToastType = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  WARNING: "WARNING",
};

export default class AppStateContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userState: {
        userID: undefined,
      },
      appState: {
        toastState: {},
      },
    };
  }

  /**
   *
   * @param {{
   *   message?: string,
   *   isActive?: boolean,
   *   type?: ToastType
   * }} toastState
   */
  showToast(toastState) {
    this.setState(
      {
        appState: {
          ...this.state.appState,
          toastState: {
            ...toastState,
            isActive: true,
          },
        },
      },
      () => {
        setTimeout(() => {
          this.setState({
            appState: {
              ...this.state.appState,
              toastState: {},
            },
          });
        }, AppConstant.TOAST_DURATION);
      }
    );
  }

  /**
   *
   * @param {{userID?: number}} user
   */
  setUser(user) {
    this.setState({ userState: user });
  }

  render() {
    return (
      <AppStateContext.Provider
        value={{
          sharedState: this.state,
          methods: {
            setToast: (toastState) => this.showToast(toastState),
            setUser: (user) => this.setUser(user),
          },
        }}
      >
        {this.props.children}
      </AppStateContext.Provider>
    );
  }
}
