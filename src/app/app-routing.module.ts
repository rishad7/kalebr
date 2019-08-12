import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresComponent } from './component/genres/genres.component';
import { ListsComponent } from './component/lists/lists.component';
import { HomeComponent } from './component/home/home.component';
import { BooksfeaturedintvshowsComponent } from './component/booksfeaturedintvshows/booksfeaturedintvshows.component';
import { CriticreviewsofabookComponent } from './component/criticreviewsofabook/criticreviewsofabook.component';
import { RecentlyfeaturedbooksComponent } from './component/recentlyfeaturedbooks/recentlyfeaturedbooks.component';

// url routing. path and correspondimg component 
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'genres', component: GenresComponent },
    { path: 'lists', component: ListsComponent },
    { path: 'books_featured', component: BooksfeaturedintvshowsComponent },
    { path: 'crtic_reviews', component: CriticreviewsofabookComponent },
    { path: 'crtic_reviews/:id', component: CriticreviewsofabookComponent }, // routing with parameter
    { path: 'recently_featured', component: RecentlyfeaturedbooksComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, GenresComponent, ListsComponent, BooksfeaturedintvshowsComponent, CriticreviewsofabookComponent, RecentlyfeaturedbooksComponent]