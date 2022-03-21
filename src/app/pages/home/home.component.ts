import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ModalComponent} from '../../comcomponents/modal/modal.component';
import {Store} from '@ngrx/store';
import {selectLoginCredential} from '../../store/selectors/credentials.selectors';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';

export const UserStatuses = {
  PLG: 'pageLoading',
  UNL: 'userNotLogged',
  ULG: 'userLogged'
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  private readonly destroySubscription = new Subject();

  @ViewChild('messageArea', {read: ElementRef}) messageArea;
  @ViewChild('textContentAreaHeader', {read: ElementRef}) textContentAreaHeader;
  @ViewChild('cardBody', {read: ElementRef}) cardBody;
  @ViewChild('headerSection', {read: ElementRef}) headerSection;

  signedMeIn = true;
  selectedMatDialog: any = null;
  userStatuses = UserStatuses;
  userStatus = UserStatuses.PLG;
  datalist = [];
  selectedMessage = null;
  networkAvailable = false;
  favIcon: HTMLLinkElement = document.querySelector('#appIcon');
  message = null;

  constructor(private matDialog: MatDialog, private store: Store<any>, private titleService: Title) {
    setTimeout(() => {
      this.checkLoginStatus();
      this.subscribeToLogin();
    }, 500);

    this.setTitle('WhatsApp');
  }

  ngOnInit(): void {
    setTimeout(() => {
     this.networkAvailable = true;
    }, 2000);
  }

  ngAfterViewChecked(): void {
  }

  // tslint:disable-next-line:typedef
  checkLoginStatus() {
    const loginToken: any = localStorage.getItem('token');
    if (loginToken) {
      this.userStatus = this.userStatuses.ULG;
    } else {
      this.userStatus = this.userStatuses.UNL;
    }
  }

  // tslint:disable-next-line:typedef
  subscribeToLogin() {

    this.store.select(selectLoginCredential).pipe(takeUntil(this.destroySubscription)).subscribe((tempData: any) => {
      if (tempData && tempData.token) {
        this.userStatus = this.userStatuses.ULG;
        this.constructDummyData();
      } else {
        const token: any = localStorage.getItem('token');
        if (token) {
          this.userStatus = this.userStatuses.ULG;
          this.constructDummyData();
        } else {
          this.userStatus = this.userStatuses.UNL;
        }
      }
    });
  }

  // tslint:disable-next-line:typedef
  login() {
    this.matDialog.closeAll();
    const modalConfig = new MatDialogConfig();
    modalConfig.width = 'auto';
    modalConfig.minWidth = '400px';
    modalConfig.id = 'login';
    modalConfig.data = {
      type: 'login'
    };
    this.selectedMatDialog = this.matDialog.open(ModalComponent, modalConfig);
  }

  // tslint:disable-next-line:typedef
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
    this.favIcon.href = '../assets/img/icons8-whatsapp.svg';
  }

  // tslint:disable-next-line:typedef
  constructDummyData() {
    this.datalist = [
      {
        id: 0,
        header: 'Test user name',
        datetime: {type: 'time', value: '1:20'},
        image: '../assets/img/mobilelogo.jpg',
        text: 'Hi, this is the text message , test text message is given to this place test text message is given to',
        badchCount: 0,
        read: false,
        delivered: false,
        selected: false,
        isonline: true,
        isgroup: false,
        groupusers: '',
        messageList: [
          {
            text:  'Hi',
            thisUser: true,
            sameUsr: false,
            sameday: false,
            datetime: {date: '1/07/2022', time: '06:24'}
          },
          {
            text:  'Hi',
            thisUser: false,
            sameUsr: false,
            sameday: false,
            datetime: {date: '1/08/2022', time: '23.33'}
          },
          {
            text:  'How are you',
            thisUser: true,
            sameUsr: false,
            sameday: false,
            datetime: {date: '1/11/2022', time: '08:12'}
          },
          {
            text:  'Good',
            thisUser: false,
            sameUsr: false,
            sameday: false,
            datetime: {date: '1/12/2022', time: '17:10'}
          },
          {
            text:  'you?',
            thisUser: false,
            sameUsr: true,
            sameday: false,
            datetime: {date: '02/11/2022', time: '23:00'}
          },
          {
            text:  'Me too',
            thisUser: true,
            sameUsr: false,
            sameday: false,
            datetime: {date: '02/12/2022', time: '12:24'}
          },
          {
            text:  'Where are you now',
            thisUser: true,
            sameUsr: true,
            sameday: false,
            datetime: {date: '02/18/2022', time: '11:34'}
          },
          {
            text:  'Hmmm',
            thisUser: false,
            sameUsr: false,
            sameday: false,
            datetime: {date: '02/20/2022', time: '15:34'}
          },
          {
            text:  'Hi',
            thisUser: true,
            sameUsr: false,
            sameday: false,
            datetime: {date: '3/1/2022', time: '06:24'}
          },
          {
            text:  'Hi',
            thisUser: false,
            sameUsr: false,
            sameday: false,
            datetime: {date: '03/05/2022', time: '23.33'}
          },
          {
            text:  'How are you',
            thisUser: true,
            sameUsr: false,
            sameday: false,
            datetime: {date: '03/07/2022', time: '08:12'}
          },
          {
            text:  'Good',
            thisUser: false,
            sameUsr: false,
            sameday: false,
            datetime: {date: '03/19/2022', time: '17:10'}
          },
          {
            text:  'you?',
            thisUser: false,
            sameUsr: true,
            sameday: false,
            datetime: {date: '03/11/2022', time: '23:00'}
          },
          {
            text:  'Me too',
            thisUser: true,
            sameUsr: false,
            sameday: false,
            datetime: {date: '03/12/2022', time: '12:24'}
          },
          {
            text:  'Where are you now',
            thisUser: true,
            sameUsr: true,
            sameday: false,
            datetime: {date: '03/20/2022', time: '11:34'}
          },
          {
            text:  'Hmmm',
            thisUser: false,
            sameUsr: false,
            sameday: true,
            datetime: {date: '03/20/2022', time: '15:34'}
          },
        ]
      },
      {
        id: 1,
        header: 'abc user one abc user one',
        datetime: {type: 'time', value: '11:25'},
        image: '../assets/img/mobilelogo.jpg',
        text: 'test text message is given to this place test text message is given to this place test text message is given to this place test text message is given to this place',
        badchCount: 0,
        read: true,
        delivered: true,
        selected: false,
        isonline: false,
        isgroup: false,
        groupusers: '',
        messageList: []
      },
      {
        id: 2,
        header: 'abc user one abc user one  ',
        datetime: {type: 'day', value: 'yesterday'},
        image: '../assets/img/mobilelogo.jpg',
        text: 'test text message is given to this place test text message is given to this place test text message is given to this place test text message is given to this place',
        badchCount: 2,
        read: false,
        delivered: false,
        selected: false,
        isonline: true,
        isgroup: false,
        groupusers: '',
        messageList: []
      },
      {
        id: 3,
        header: 'abc user one abc user one  ',
        datetime: {type: 'day', value: 'yesterday'},
        image: '../assets/img/mobilelogo.jpg',
        text: 'test text message is given to this place test text message is given to this place test text message is given to this place test text message is given to this place',
        badchCount: 2,
        read: false,
        delivered: false,
        selected: false,
        isonline: false,
        isgroup: true,
        groupusers: 'User 1, +9477223344, ABC User aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        messageList: []
      },
      {
        id: 1,
        header: 'abc user one abc user one',
        datetime: {type: 'time', value: '11:25'},
        image: '../assets/img/mobilelogo.jpg',
        text: 'test text message is given to this place test text message is given to this place test text message is given to this place test text message is given to this place',
        badchCount: 0,
        read: true,
        delivered: true,
        selected: false,
        isonline: false,
        isgroup: false,
        groupusers: '',
        messageList: []
      },
      {
        id: 2,
        header: 'abc user one abc user one  ',
        datetime: {type: 'day', value: 'yesterday'},
        image: '../assets/img/mobilelogo.jpg',
        text: 'test text message is given to this place test text message is given to this place test text message is given to this place test text message is given to this place',
        badchCount: 2,
        read: false,
        delivered: false,
        selected: false,
        isonline: true,
        isgroup: false,
        groupusers: '',
        messageList: []
      },
      {
        id: 3,
        header: 'abc user one abc user one  ',
        datetime: {type: 'day', value: 'yesterday'},
        image: '../assets/img/mobilelogo.jpg',
        text: 'test text message is given to this place test text message is given to this place test text message is given to this place test text message is given to this place',
        badchCount: 2,
        read: false,
        delivered: false,
        selected: false,
        isonline: false,
        isgroup: true,
        groupusers: 'User 1, +9477223344, ABC User aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        messageList: []
      },
      {
        id: 1,
        header: 'abc user one abc user one',
        datetime: {type: 'time', value: '11:25'},
        image: '../assets/img/mobilelogo.jpg',
        text: 'test text message is given to this place test text message is given to this place test text message is given to this place test text message is given to this place',
        badchCount: 0,
        read: true,
        delivered: true,
        selected: false,
        isonline: false,
        isgroup: false,
        groupusers: '',
        messageList: []
      },
      {
        id: 2,
        header: 'abc user one abc user one  ',
        datetime: {type: 'day', value: 'yesterday'},
        image: '../assets/img/mobilelogo.jpg',
        text: 'test text message is given to this place test text message is given to this place test text message is given to this place test text message is given to this place',
        badchCount: 2,
        read: false,
        delivered: false,
        selected: false,
        isonline: true,
        isgroup: false,
        groupusers: '',
        messageList: []
      },
      {
        id: 3,
        header: 'abc user one abc user one  ',
        datetime: {type: 'day', value: 'yesterday'},
        image: '../assets/img/mobilelogo.jpg',
        text: 'test text message is given to this place test text message is given to this place test text message is given to this place test text message is given to this place',
        badchCount: 2,
        read: false,
        delivered: false,
        selected: false,
        isonline: false,
        isgroup: true,
        groupusers: 'User 1, +9477223344, ABC User aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        messageList: []
      }
    ];


  }

  // tslint:disable-next-line:typedef
  selected(data) {

    this.datalist = this.datalist.map((tempData: any) => {
      if (tempData.id == data.id) {
        tempData.selected = true;
        tempData.read = true;
        tempData.badchCount = 0;
        this.selectedMessage = data;
        this.scrollToBottom();


      } else {
        tempData.selected = false;
      }

      return tempData;
    });

  }

  // tslint:disable-next-line:typedef
  onFileDropped(event) {
    console.log(event);
  }

  // tslint:disable-next-line:typedef
  // setMessageContHeight() {
    // if (this.messageArea && this.textContentAreaHeader && this.headerSection) {
    //   this.messageArea.nativeElement.style.maxHeight = this.cardBody.nativeElement.offsetHeight - this.headerSection.nativeElement.offsetHeight;
    //
    //   console.log(this.messageArea.nativeElement.offsetHeight);
    //   console.log(this.textContentAreaHeader.nativeElement.offsetHeight);
    //   console.log(this.headerSection.nativeElement.offsetHeight);
    // }

  // }

  // tslint:disable-next-line:typedef
  textFieldKeyPressed(event) {
    if (event && (event.keyCode == 13)) {
      if (event.shiftKey == true) {
        this.message = this.message + '\n';
      } else {
        event.preventDefault();
        this.sendMessage();
      }
    }
  }

  // tslint:disable-next-line:typedef
  sendMessage() {
    const todate = new Date();

    const obj =
      {
        text: this.message,
        thisUser: true,
        sameUsr: this.selectedMessage.messageList[this.selectedMessage.messageList.length - 1].thisUser,
        sameday: true,
        datetime: {date: `${todate.getDate()}/${todate.getMonth()}/${todate.getFullYear()}`, time: `${todate.getHours()}:${todate.getMinutes()}`}
      };

    this.selectedMessage.messageList.push(obj);
    this.message = null;
    this.scrollToBottom();



  }

  // tslint:disable-next-line:typedef
  scrollToBottom() {
    setTimeout(() => {
      this.messageArea.nativeElement.scrollTop = this.messageArea.nativeElement.scrollHeight;
    }, 100);
  }
}
