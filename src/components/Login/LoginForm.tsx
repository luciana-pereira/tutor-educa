import { useState, forwardRef } from "react";
import ImgLogin from "./ImgLogin";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Controller, useForm, useWatch } from "react-hook-form";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { firebaseAuth, firebaseDB, initFirebase, usersRef } from '../../services/firebase';
import animation from "../../assets/animation.gif";
import "./Login.css";
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiImage, EuiPanel, EuiProvider, EuiSpacer, EuiText, EuiTextColor } from "@elastic/eui";
import { useAppDispatch } from "../../store/hooks";
import { collection, query, where, addDoc, getDocs } from "firebase/firestore";
import { setUser } from "../../store/slices/AuthSlice";


const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginForm = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [isNavigate, setIsNavigate] = useState<boolean>(false);

    const app = initFirebase();
    const auth = getAuth(app);

    // const navigate = useNavigate();
    // const dispatch = useAppDispatch();

    const {
        control,
        handleSubmit,
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway')
            return;
        setOpen(false);
    };

    // onAuthStateChanged(firebaseAuth, (currentUser) => {
    //     if (currentUser) navigate("/");
    // });

    // const login = async () => {
    //     const provider = new GoogleAuthProvider();
    //     const {
    //         user: { displayName, email, uid },
    //     } = await signInWithPopup(firebaseAuth, provider);

    //     if (email) {
    //         const firestoreQuery = query(usersRef, where("uid", "==", uid));
    //         const fetchedUser = await getDocs(firestoreQuery);
    //         if (fetchedUser.docs.length === 0) {
    //             await addDoc(collection(firebaseDB, "users"), {
    //                 uid,
    //                 name: displayName,
    //                 email,
    //             });
    //         }
    //         dispatch(setUser({ uid, email: email!, name: displayName! }));
    //         navigate("/");
    //     }
    // };

    const onSubmit = async (formData: Object) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Usuário logado com sucesso", user);
                setIsNavigate(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error", errorCode, errorMessage);
                setOpen(true);
            });
    }

    const email = useWatch({
        control,
        name: "email",
    });

    const password = useWatch({
        control,
        name: "password",
    });

    const isDisabled = () => {
        if (
            email &&
            password
        ) {
            return false;
        } else {
            return true;
        }

    }

    return (
        <section className="form-container">
            <div className="effect"></div>
            <EuiFlexItem>
                <EuiImage src={animation} alt="logo" />
            </EuiFlexItem>
            <div className="form-content-login">
                {isNavigate && (
                    <Navigate to="dashboard" replace={true} />
                )}
                <div className="form">
                    <EuiText textAlign="center" grow={false}>
                        <h2>
                            <EuiTextColor color="#0b5cff">Tutor Educa</EuiTextColor>
                        </h2>
                        <h6>
                            <EuiTextColor>Compartilhando conhecimento</EuiTextColor>
                        </h6>
                    </EuiText>
                    <form className="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <Controller
                            name='email'
                            control={control}
                            render={({ field: { onChange, onBlur, value, name } }) => {
                                return (
                                    <Input
                                        id={"email"}
                                        type={"text"}
                                        name={name}
                                        label={"E-mail"}
                                        stylesLabel={"label-login"}
                                        stylesInput={"input-login"}
                                        stylesWrapper={undefined}
                                        stylesError={undefined}
                                        value={value}
                                        error={false}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                    />
                                );
                            }}
                        />

                        <Controller
                            name='password'
                            control={control}
                            render={({ field: { onChange, onBlur, value, name } }) => {
                                return (
                                    <Input
                                        id={"password"}
                                        type={"password"}
                                        name={name}
                                        label={"Senha"}
                                        stylesLabel={"label-login"}
                                        stylesInput={"input-login"}
                                        stylesWrapper={undefined}
                                        stylesError={undefined}
                                        value={value}
                                        error={false}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                    />
                                );
                            }}
                        />
                        {/* {loading ? (
                            <Button styleBtn={"btn-search"} >Carregando...</Button>
                        ) : ( */}
                        {/* <Button styleBtn={"btn-search"} >Login</Button> */}
                        {/* )}
                        <Error error={error && 'Dados incorretos.'} /> */}
                        <Button
                            disabled={isDisabled()}
                            styleBtn={!isDisabled() ? "btn-search btn-container" : "btn-disable"}
                        >
                            Login
                        </Button>
                    </form>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            E-mail ou senha incorreto!
                        </Alert>
                    </Snackbar>
                </div>
                {/* <div className={"lost-password"}>
                    <Link to="/login/perdeu">
                        Perdeu a Senha?
                    </Link>
                </div> */}

                <div className={"register-container"}>
                    <div className={"text-register-container"}>
                        <p>Não tem conta?</p>
                        <Link className={"register"} to="/cadastro">
                            Cadastre-se
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default LoginForm;