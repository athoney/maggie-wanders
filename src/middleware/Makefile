all: shell py rm

shell:
	./image-info.sh > out.txt

py:
	python3 images.py > ../app/components/images.jsx

rm:
	rm out.txt