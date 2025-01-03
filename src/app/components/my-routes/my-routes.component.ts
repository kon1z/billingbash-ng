import { Component, ElementRef, Input, QueryList, Renderer2, TrackByFunction, ViewChildren } from '@angular/core';
import { ABP, LocalizationModule, PermissionDirective, RoutesService, TreeNode } from '@abp/ng.core';
import { AsyncPipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EllipsisDirective } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-my-routes',
  standalone: true,
  imports: [
    PermissionDirective,
    NgTemplateOutlet,
    RouterLink,
    NgClass,
    LocalizationModule,
    EllipsisDirective,
    AsyncPipe
  ],
  templateUrl: './my-routes.component.html',
  styleUrl: './my-routes.component.scss'
})
export class MyRoutesComponent {
  @Input() smallScreen?: boolean;

  @ViewChildren('childrenContainer') childrenContainers!: QueryList<ElementRef<HTMLDivElement>>;

  rootDropdownExpand = {} as { [key: string]: boolean };

  trackByFn: TrackByFunction<TreeNode<ABP.Route>> = (_, item) => item.name;

  constructor(
    public readonly routesService: RoutesService,
    protected renderer: Renderer2
  ) {
  }

  isDropdown(node: TreeNode<ABP.Route>) {
    return !node?.isLeaf || this.routesService.hasChildren(node.name);
  }

  closeDropdown() {
    this.childrenContainers.forEach(({ nativeElement }) => {
      this.renderer.addClass(nativeElement, 'd-none');
      setTimeout(() => this.renderer.removeClass(nativeElement, 'd-none'), 0);
    });
  }
}
