# open out.txt and store each line in a list
with open('out.txt') as f:
    lines = f.readlines()

# remove whitespace characters like `\n` at the end of each line
lines = [x.strip() for x in lines]

# break lines on comma
lines = [x.split(',') for x in lines]

info = []
for line in lines:
    filename = line[0].split(':')[0]
    # print(filename.split('.')[1])
    file_obj = {}
    if filename.split('.')[1].lower() == 'jpg' or filename.split('.')[1].lower() == 'jpeg': 
        file_obj['src'] = '/images/gallery/' + filename.split('/')[-1]
        size = line[-2].split('x')
        file_obj['width'] = int(size[0])
        file_obj['height'] = int(size[1])
        info.append(file_obj)

print("export const images = ", end="")
print(info)