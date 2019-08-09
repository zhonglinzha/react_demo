import React from 'react';


const Hoc = WrapeComp => {

    return function TT(props){

        console.log(props)
        return <WrapeComp {...props}></WrapeComp>
    }
}

export default Hoc;