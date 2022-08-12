import React, {Component} from "react";
import "./MidiPort.css";
import Switch from "react-switch";

class MidiPort extends Component {

    render() {

        let port = this.props.port;
        let isSelected = this.props.selected;
        let clickHandler = this.props.clickHandler;

        // console.log("MidiPort.render", port.type, port.name, isSelected);

        //TODO: display MIDI channel when connected
        return (
            <div key={port.id} className={isSelected ? `port ${port.type} enabled` : `port ${port.type}`}>
                {/*<div className={"port-description"}>*/}
                    <div className="port-type">{port.type === 'input' ? 'IN' : 'OUT'}</div>
                    <div className="port-name">{port.name} </div>
                    <div className="port-switch">
                        <Switch
                            onChange={() => clickHandler(port.id)}
                            checked={isSelected}
                            className="react-switch"
                            id="normal-switch"
                            height={20} width={42}
                        />
                    </div>
                {/*</div>*/}
            </div>
        );
    }

}

export default MidiPort;
