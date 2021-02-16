import React, { Component } from 'react'

export default class CalculatorView extends Component {
    render() {
        return (
            <div className="calculator-view">
                <table>
                    <tr>
                        <h2>0</h2>
                    </tr>
                    
                    <tr>
                        <td><button>1</button></td>
                        <td><button>2</button></td>
                        <td><button>3</button></td>
                        <td><button> Add (+)</button></td>
                    </tr>
                    <tr>
                        <td><button>4</button></td>
                        <td><button>5</button></td>
                        <td><button>6</button></td>
                        <td><button> Sub (-)</button></td>
                    </tr>
                    <tr>
                        <td><button>7</button></td>
                        <td><button>8</button></td>
                        <td><button>9</button></td>
                        <td><button> Multipy (*)</button></td>
                    </tr>
                    <tr>
                        <td><button>clear</button></td>
                        <td><button>0</button></td>
                        <td><button>=</button></td>
                        <td><button> Divde (/)</button></td>
                    </tr>
                </table>
                
            </div>
        )
    }
}
