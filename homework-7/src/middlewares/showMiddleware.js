export default  (store) => next => action => {
    //console.log('будет отправлен к редьюсерам', action);
    let returnValue = next(action);
    //console.log('состояние после экшена', getState());
    return returnValue;
};