import { Component } from '@angular/core';
import { DetailsFunctionCardComponent } from './details-function-card/details-function-card.component';
import { DetailsIntroTechnicalComponent } from './details-intro-technical/details-intro-technical.component';
import { DetailsContactsComponent } from './details-contacts/details-contacts.component';
import { DetailsFaqComponent } from './details-faq/details-faq.component';
import { DetailsUsecasesComponent } from './details-usecases/details-usecases.component';
import { BreadcrumbsComponent } from '../misc/breadcrumbs/breadcrumbs.component';
import { FunctionsService } from '../services/functions.service';
import { Function, FunctionDetails } from '../functions/function.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailsFunctionCardComponent, DetailsIntroTechnicalComponent, DetailsContactsComponent, DetailsFaqComponent, DetailsUsecasesComponent, BreadcrumbsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  functionData: Function | undefined;
  detailsData: FunctionDetails | undefined;
  technicalDataArray: any[][] | undefined;
  useCaseDataArray: any[][] | undefined;

  constructor(private route: ActivatedRoute, private functionService: FunctionsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const idNumber = parseInt(id, 10);
      this.functionService.getFunctionById(idNumber).subscribe((response) => {
        this.functionData = response?.function;
        this.detailsData = response?.functionDetails;
        this.technicalDataArray = response?.functionDetails.technicalData.map((obj) => Object.values(obj));
        this.useCaseDataArray = response?.functionDetails.useCaseData.map((obj) => Object.values(obj));
        console.log(response);
        
      });
    } else {
      console.error('No ID found in URL');
    }
  }
}
