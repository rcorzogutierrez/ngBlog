import {Component, OnInit, ViewChild,  AfterViewInit} from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

import {MatTableDataSource} from '@angular/material/table';

import { PostService } from 'src/app/components/posts/post.service';
import { PostI } from '../../models/post.interface';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['titlePost', 'tagPost', 'actions'];
  dataSource = new MatTableDataSource();

@ViewChild(MatPaginator, {static:true})paginator:MatPaginator;
@ViewChild(MatSort, {static:true})sort:MatSort;
  

  constructor(private postSvc: PostService) { }

  ngOnInit() {
    this.postSvc.getAllPosts().subscribe(posts=> (this.dataSource.data = posts));
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort= this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEditPost(post:PostI){
    console.log('Edit post', post);
  }

  onDeletePost(post:PostI){
    console.log('Delete post', post);
  }

  onNewPost(){
    console.log('New Post');
  }

}
