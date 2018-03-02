import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from '../tabs.component';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @Input() tabTitle;
  active: boolean;
  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }
  getStyle() {
    if (this.active) {
      return '#385B74';
    } else {
      return '#223847';
    }
  }
}
