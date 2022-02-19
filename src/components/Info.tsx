import React from "react";

interface IProps {
    nama: string;
    kelas: string;
    isMorning: boolean;

}

class Info extends React.Component<IProps> {
    render() {
        return (
          <div>
            <h1>Nama: {this.props.nama}</h1>
            <h3>Kelas: {this.props.kelas}</h3>
            <h3>Pagi/Siang: {this.props.isMorning}</h3>
          </div>
        )
    }
}

export default Info;