import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'balance-print',
  styleUrl: 'balance-print.css',
  shadow: true,
})
export class BalancePrint {

  render() {
    return (
      <Host>
        <h3>打印设置</h3>
            <div>
                <table>
                    <body>
                        <tr>
                            <td>打印内容</td>
                            <td>
                                <lable><input type="radio"/>当前显示</lable>
                                <lable><input type="radio"/>所有科目</lable>
                            </td>
                        </tr>
                    </body>
                </table>
                
            </div>
      </Host>
    );
  }

}
