import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "src/actions/user_action";
import { useHistory } from "react-router";

export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    let history = useHistory();
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth())
        .then((response) => {
          //로그인 하지 않은 상태
          if (!response.payload) {
            if (option === true) {
              history.push("/login");
            }
          } else {
            //로그인 한 상태
            if (response.payload) {
              history.push("/");
            } else {
              //로그인한 사람이 못들어가는 페이지 로그인,회원가입
              if (option === false) history.push("/");
            }
          }
        })
        .catch((error) => {
          if (error) {
            history.push("/login");
          }
        });
    }, []);
    return <SpecificComponent {...props} user={user} />;
  }

  return AuthenticationCheck;
}

// export default (SpecialComponent, option, adminRoute = null) => {
//   /*
//      예)  option: null -> 누구나 출입이 가능한 페이지 (home)
//                  true -> 로그인한 유저만 출입이 가능한 페이지
//                  false -> 로그인한 유저는 출입이 불가능한 페이지
//   */

//   const AuthenticateCheck = (props) => {
//     const isLoggedIn = useSelector((state) => state.user.user.isLoggedIn);
//     console.log(1212, isLoggedIn);

//     useEffect(() => {
//       if (!isLoggedIn && option) {
//         props.history.push("/login");
//       }
//     }, []);

//     return <SpecialComponent />;
//   };

//   return AuthenticateCheck;
// };
