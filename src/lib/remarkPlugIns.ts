import { visit } from 'unist-util-visit'

export function customRemarkDirective() {

    return function (tree: any) {
        visit(tree, function (node) {
            if (
                node.type === 'containerDirective' ||
                node.type === 'leafDirective' ||
                node.type === 'textDirective'
            ) {
                const data = node.data || (node.data = {})
                data.hName = node.name
                data.hProperties = node.attributes
            }
        })
    }
}