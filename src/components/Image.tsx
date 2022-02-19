import React from "react";

interface IProps {
    num: number;
}


class Image extends React.Component<IProps> {

    renderImg = () => {
        const { num } = this.props

        if (num % 3 === 0 && num !== 0) {
            return <img src="https://i.guim.co.uk/img/media/3aab8a0699616ac94346c05f667b40844e46322f/0_123_5616_3432/master/5616.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=cdfeb9fcf58f8dd0d5dcb70ec4fb6673"/>
        }
        return null;
    }

    render() {
        return this.renderImg();
    }

}

export default Image;