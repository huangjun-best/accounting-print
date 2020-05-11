import { Component, State, Prop, h } from '@stencil/core';

interface printListType {
  id: number,
  name: string,
  checked?:boolean,
  type: string,
}

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})

export class MyComponent {

  /**
   *
   * 当前选中的类型
   * @type {string}
   * @memberof MyComponent
   */
  @State() checkType: string = "voucher";

  /**
   *
   *
   * @type {boolean}
   * @memberof MyComponent
   */
  @State() showDialog: boolean = false;
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;


  private printList: Array<printListType> = [{
    id: 1,
    checked: true,
    name: "凭证",
    type: "voucher"
  },{
    id: 2,
    name: "余额表",
    type: "balance"
  },{
    id: 3,
    name: "明细账",
    type: "accountDetail"
  },{
    id: 4,
    name: "资产负债表",
    type: "balanceSheet"
  },{
    id: 5,
    name: "利润表",
    type: "incomeReport"
  },{
    id: 6,
    name: "现金流量表",
    type: "cashFlow"
  }];

  public packData() {
    console.log(this.checkType);
    this.showDialog = true;
  }

  private changeRadio(evt: any) {
    console.log(evt.target);
    let targetRadio = evt.target;
    this.checkType = targetRadio.getAttribute('data-type');
  }

  private getPrintList(): Array<HTMLElement>{
    return <div class="wx-print-type-lists">
      {this.printList.map((printItem) => {
        return (<div class="wx-print-type-list" key={printItem.id}>
          <label><input type="radio" onChange={this.changeRadio.bind(this)} name="printType" data-type={printItem.type} checked={printItem.checked}/>{printItem.name}</label>
        </div>)
      })}
    </div>
  }
  renderHtml() {
    if(this.showDialog){
    return <div>
      <balance-print />
      </div>
    } else {
      return <div>
        <h3 class="wm-print-title">请选择本次要打印的账表：</h3>
        {this.getPrintList()}
        <button class="continue-btn" onClick={this.packData.bind(this)}>继续</button>
      </div>
    }
  }

  render() {
    return <div class="wm-print-content">
      {this.renderHtml()}
    </div>
  }
}
